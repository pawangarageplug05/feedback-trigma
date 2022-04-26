import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { FeedbackService } from '../feedback.service';
import { FeedbackRequestData } from '../Models/feedback-request';
import { LocationData } from '../Models/locationData';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  options: CameraOptions = {
    quality: 60,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: 0
  }
  locationData: LocationData[] = [];
  feedbackRequestObject: FeedbackRequestData = new FeedbackRequestData()
  selectedLocation: LocationData;
  clickedImage: string;
  constructor(public feedbackService: FeedbackService, private camera: Camera, public actionSheetController: ActionSheetController, public toastCtrl: ToastController) {
    this.getLocationData();
  }

  getLocationData() {
    this.feedbackService.getLocation().subscribe(res => {
      if (res) {
        this.locationData = res.aaData
      }

    }, error => { })
  }
  selectFeedbackType(val: string) {
    this.feedbackRequestObject.feedback_info_related_to = val;
  }
  changeLocation(ev) {
    this.feedbackRequestObject.master_location_uuid = ev.detail.value.master_location_uuid
    this.feedbackRequestObject.master_restaurant_uuid = ev.detail.value.master_restaurant_uuid;
  }
  validateForm() {
    if (!this.feedbackRequestObject.feedback_info_related_to) {
      this.presentToast('Please select feedback type')
    } else if (!this.feedbackRequestObject.master_location_uuid) {
      this.presentToast('Please select location')
    }
    else {
      this.submitForm()
    }
  }
  submitForm() {
    this.feedbackRequestObject.user_information_uuid = 'eb413762a5f85881c63cd196f4c5569b'
    this.feedbackService.createFeedbackInfo(this.feedbackRequestObject).subscribe(res => {
      this.presentToast('Feedback send Successfully');
      this.feedbackRequestObject = new FeedbackRequestData();
    }, error => { })
  }
  captureImage(val: any) {
    this.camera.getPicture(this.options).then((imageData) => {

      let base64Image = 'data:image/jpeg;base64,' + imageData;
      if (val == 1) {
        this.feedbackRequestObject.feedback_info_attachment_1 = base64Image;
      } else if (val == 2) {
        this.feedbackRequestObject.feedback_info_attachment_2 = base64Image;
      } else {
        this.feedbackRequestObject.feedback_info_attachment_3 = base64Image;

      }
    }, (err) => {

    });
  }


  async chooseImageOption(val: any) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose Option',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Take Photo',
        role: 'destructive',
        icon: 'camera-outline',

        handler: () => {
          this.options.sourceType = 1
          this.captureImage(val)
        }
      }, {
        text: 'Choose from Library',
        role: 'destructive',
        icon: 'folder-outline',

        handler: () => {
          this.options.sourceType = 0;
          this.captureImage(val)
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {

        }
      }]
    });
    await actionSheet.present();
  }

  removeImage(val: any) {
    event.stopPropagation();
    if (val == 1) {
      this.feedbackRequestObject.feedback_info_attachment_1 = null;
    } else if (val == 2) {
      this.feedbackRequestObject.feedback_info_attachment_2 = null;
    } else {
      this.feedbackRequestObject.feedback_info_attachment_3 = null;

    }
  }

  public async presentToast(msg: string, position?: string, cssCustomClass?) {

    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      cssClass: cssCustomClass
    });
    toast.present();
  }

}
