
UC4 - 직원 정보 검색
===================

Sequence Diagram
-----------------
![object sequence diagram-2](https://user-images.githubusercontent.com/70556633/118361366-1d05bf00-b5c6-11eb-8282-22a549cc9d8b.jpg)


### [variations]
![sequence diagram- variation-3](https://user-images.githubusercontent.com/70556633/118361390-36a70680-b5c6-11eb-84ee-6a2ce205fe95.jpg)
varation1
- DB connection이 page maker에게 검색 결과(data)를 제공하며, page maker는 DB connection으로부터 받은 data를 바탕으로 page를 만든다. 
- 'provider' 기능은 DB와 정보를 주고 받는 DB connection과 무관한 역할이다. 이는 DB connection의 전문성을 약화시키며, 응집성을 축소시킨다.
<br>

variation2
- Page maker가 전달 받은 value(data or err)를 바탕으로 적절한 Page를 만든 후 이를 Post 한다.
- 'post'는 page maker의 본래의 기능과 무관한 기능이다. 이는 page maker의 전문성을 약화시키며, 응집성을 축소시킨다.


![object sequence diagram-2](https://user-images.githubusercontent.com/70556633/118361366-1d05bf00-b5c6-11eb-8282-22a549cc9d8b.jpg)

variation3
- DB connection는 DB에서 필요한 data를 찾아 controller에게 전달하며, controller는 render()를 호출 시 data를 매개변수로 보내 page maker에게 data를 제공한다.
- page maker를 통해 만든 interface page가 controller에게 전달되며, controller는 이를 post하여 화면에 표시되도록 한다.
- DB connection과 page maker의 전문성이 강화되었으며, 이에 따라 응집성이 높아졌다. 하지만 controller의 높은 connectivity를 고려할 필요가 있다. 

<br>

Class Diagram
---------------
![IMG_1166](https://user-images.githubusercontent.com/70556633/118362024-bc2bb600-b5c8-11eb-9a11-64c9c05d9c3f.JPG)
