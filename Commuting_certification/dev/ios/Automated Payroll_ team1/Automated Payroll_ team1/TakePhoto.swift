//
//  TakePhoto.swift
//  Automated Payroll_ team1
//
//  Created by Kim JoonOh on 2021/05/24.
//

import UIKit
import Firebase
import CoreLocation
import Alamofire

class TakePhoto: UIViewController, UIImagePickerControllerDelegate, UINavigationControllerDelegate, CLLocationManagerDelegate {
    
    var id = ""
    var locationManager: CLLocationManager!
    var lat = ""
    var long = ""

    @IBOutlet var idLbl: UILabel!
    @IBOutlet var cameraImage: UIImageView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        let camera = UIImagePickerController()
        camera.allowsEditing = false
        camera.sourceType = .camera
        camera.cameraDevice = .rear
        camera.cameraCaptureMode = .photo
        camera.delegate = self
        present(camera, animated: true, completion: nil)
        // Auth.auth().currentUser?.email
        idLbl.text = id
        
        // 위경도 관련
        locationManager = CLLocationManager()
        locationManager.delegate = self
        
        // 사용자에게 위치 허용 alert 띄우기
        locationManager.requestWhenInUseAuthorization()
        locationManager.desiredAccuracy = kCLLocationAccuracyBest
        locationManager.startUpdatingLocation()
        
        // 위경도 가져오기
        let coor = locationManager.location?.coordinate
        let latitude = coor?.latitude
        let longitude = coor?.longitude
        
        if let latitude = latitude, let longitude = longitude {
            lat = String(format:"%.3f", latitude)
            long = String(format:"%.3f", longitude)
        }
    }
    
    @IBAction func clickNextBtn(_ sender: UIButton) {
        // 출근인증
        let URL = "http://3.36.39.242/api/v1/attendances/"
        let header: HTTPHeaders = [
            "Authorization" : "Bearer " + ad.token]
        
        let PARAM: [String: String] = [
            "start_latitude" : lat ,
            "start_longitude" : long
        ]
        
        let alamo = AF.request(URL, method: .post, parameters: PARAM, headers: header).validate(statusCode: 200..<300)
        
        
        alamo.responseString(emptyResponseCodes: [200,204,205]) { response in
            print(PARAM)
            switch response.result
            {
            case .success(let value):
                print("post success")
                guard let nextVC = self.storyboard?.instantiateViewController(identifier: "Main") as? Main else {return}
                nextVC.lat = self.lat
                nextVC.long = self.long
                nextVC.id = self.id
                self.navigationController?.pushViewController(nextVC, animated: true)
                
            case .failure(let error):
                print("error: \(error.errorDescription!)")
                let alert = UIAlertController(title: "Error", message: error.errorDescription, preferredStyle: .alert)
                let okAction = UIAlertAction(title: "OK", style: .default, handler: nil)
                alert.addAction(okAction)
                self.present(alert, animated: true, completion: nil)
            }
        }
    }
    
    func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]) {
        
        if let image = info[UIImagePickerController.InfoKey.originalImage] as? UIImage {
            cameraImage.image = image
        }
        self.dismiss(animated: true, completion: nil)

    }
    
    // gps 에러 발생시 얼럿창 표출
    func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
        let alert = UIAlertController(title: "Error", message: "Cannot get GPS", preferredStyle: .alert)
        let okAction = UIAlertAction(title: "OK", style: .default, handler: nil)
        alert.addAction(okAction)
        present(alert, animated: true, completion: nil)
    }
 

}

