//
//  TakeLocation.swift
//  Automated Payroll_ team1
//
//  Created by Kim JoonOh on 2021/05/24.
//

import UIKit
import CoreLocation
import Firebase
import Alamofire

class Main: UIViewController, CLLocationManagerDelegate, UIImagePickerControllerDelegate, UINavigationControllerDelegate {

    var id = ""
    var lat = ""
    var long = ""
    @IBOutlet var latLbl: UILabel!
    @IBOutlet var longLBl: UILabel!
    @IBOutlet var idLBl: UILabel!
    
    @IBOutlet var nextBtn: UIButton!
    let camera = UIImagePickerController()
    
    var locationManager: CLLocationManager!
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // 카메라 관련
        camera.allowsEditing = false
        camera.sourceType = .camera
        camera.cameraDevice = .rear
        camera.cameraCaptureMode = .photo
        camera.delegate = self
        
        latLbl.text = lat
        longLBl.text = long
        
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
            latLbl.text = String(format:"%.3f", latitude)
            longLBl.text = String(format:"%.3f", longitude)
        }
        
        idLBl.text = id
        
    }
    
    @IBAction func clickLogout(_ sender: UIButton) {
        
        self.present(self.camera, animated: true) {
            self.leaveAuth()
        }

    }
    

    func leaveAuth() {
        let URL = "http://3.36.39.242/api/v1/attendances/1/"
        let header: HTTPHeaders = [
            "Authorization" : "Bearer " + ad.token]
        
        let PARAM: [String: String] = [
            "end_latitude" : lat ,
            "end_longitude" : long
        ]
        
        let alamo = AF.request(URL, method: .put, parameters: PARAM, headers: header).validate(statusCode: 200..<300)
        
        alamo.responseString(emptyResponseCodes: [200,204,205]) { response in
            print(PARAM)
            switch response.result
            {
            case .success(let value):
                print("put success")
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
        
        
        self.navigationController?.popToRootViewController(animated: true)
    }

}



