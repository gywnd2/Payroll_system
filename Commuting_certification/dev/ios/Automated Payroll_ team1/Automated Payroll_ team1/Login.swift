//
//  ViewController.swift
//  Automated Payroll_ team1
//
//  Created by Kim JoonOh on 2021/05/20.
//

import UIKit
import Firebase
import Alamofire
import SwiftyJSON

let ad = UIApplication.shared.delegate as! AppDelegate

class Login: UIViewController{
    
    @IBOutlet var idText: UITextField!
    @IBOutlet var pwText: UITextField!
    override func viewDidLoad() {
        super.viewDidLoad()
        navigationController?.navigationBar.barTintColor = .systemTeal
        idText.delegate = self
        pwText.delegate = self
    }
    
    // firebase 코드
//    @IBAction func clickSignUp(_ sender: UIButton) {
//        let email = idText.text ?? ""
//        let password = pwText.text ?? ""
//
//        Auth.auth().createUser(withEmail: email, password: password) { authResult, error in
//            if (error != nil) {
//                guard let error = error else {return}
//                let alert = UIAlertController(title: "Error", message: "\(error.localizedDescription)", preferredStyle: .alert)
//                let okAction = UIAlertAction(title: "OK", style: .default, handler: nil)
//                alert.addAction(okAction)
//                self.present(alert, animated: true, completion: nil)
//                return
//            }
//
//            guard let nextVC = self.storyboard?.instantiateViewController(identifier: "TakePhoto") as? TakePhoto else {return}
//            nextVC.id = self.idText.text ?? ""
//            self.navigationController?.pushViewController(nextVC, animated: true)
//
//        }
//    }
    
    
    @IBAction func clickLogin(_ sender: UIButton) {
        
        // ** Firebase 사용코드
//        let email = idText.text ?? ""
//        let password = pwText.text ?? ""
//        Auth.auth().signIn(withEmail: email, password: password) { [weak self] authResult, error in
//          guard let strongSelf = self else { return }
//            if (error != nil) {
//                let alert = UIAlertController(title: "Login Error", message: "Check id and password", preferredStyle: .alert)
//                let okAction = UIAlertAction(title: "OK", style: .default, handler: nil)
//                alert.addAction(okAction)
//                self!.present(alert, animated: true, completion: nil)
//                return
//            }
//
//            // 아이디 비번이 맞을경우
//            guard let nextVC = self?.storyboard?.instantiateViewController(identifier: "TakePhoto") as? TakePhoto else {return}
//            nextVC.id = self?.idText.text ?? ""
//            self?.navigationController?.pushViewController(nextVC, animated: true)
//
//        }
        
        // 로그인 
        let URL = "http://3.36.39.242/api/v1/users/login/"
        let PARAM: [String: String] = [
            "username" : idText.text ?? "",
            "password" : pwText.text ?? ""
        ]
        
        let alamo = AF.request(URL, method: .post, parameters: PARAM).validate(statusCode: 200..<300)
        
        alamo.responseString { response in
            switch response.result
            {
            case .success(let value):
                print("login success")
                let json = JSON(value)
                print(json)
                print(json.stringValue)
                guard let nextVC = self.storyboard?.instantiateViewController(identifier: "TakePhoto") as? TakePhoto else {return}
                nextVC.id = self.idText.text ?? ""
                self.idText.text = ""
                self.pwText.text = ""
                self.navigationController?.pushViewController(nextVC, animated: true)
                
            case .failure(let error):
                print("error: \(error.errorDescription)")
                let alert = UIAlertController(title: "Login Error", message: "Check id and password", preferredStyle: .alert)
                let okAction = UIAlertAction(title: "OK", style: .default, handler: nil)
                alert.addAction(okAction)
                self.present(alert, animated: true, completion: nil)
            }
        }
    }
    
    override func viewWillAppear(_ animated: Bool) {
        navigationController?.isNavigationBarHidden = true
    }
    
    // 화면 클릭시 키보드 내림처리
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        self.view.endEditing(true)
    }
}

// 키보드 return 클릭시 키보드 내림 처리
extension Login: UITextFieldDelegate {
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        idText.resignFirstResponder()
        pwText.resignFirstResponder()
        return true
    }
}


