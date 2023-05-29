# T11 - Web Application

## Description

**Web Application** is one of the components of the Dentistimo system. Dentistimo allows users to view and book dentist appointments in the city of Gothenburg. More information can be found [here](https://git.chalmers.se/courses/dit355/dit356-2022/t-11/t11-project).

Web Application represents Graphical User Interface (GUI) for the user to interact with in order to book dental appointments. Web Application communicates with other components in order to achieve the following goals:

- [Database Model Handler](https://github.com/T-11-Dentistimo/T11-Database-Model-Handler) to get the information saved in the database, which is needed to display pins of clinics on the map of Gothenburg along with their names and opening hours,
- [Schedule Handler](https://github.com/T-11-Dentistimo/T11-Schedule-Handler) to display dental appointment slots according to the user's date choice and update schedule dynamically, and
- [Booking Validator](https://github.com/T-11-Dentistimo/T11-Booking-Validator) to proceed with the user's booking request, and display notification to the user depending on the booking outcome (success, warning, failure or service unavailable) according to the message received from the Booking Validator.

### Subcomponents

This component consists of two subcomponents, each with its own README.

- [Frontend](./frontend/README.md)
- [Backend](./backend/README.md)

## **Data flow**

### **<ins>Input Data</ins>**

The **input data** of this component is the dental clinics data received from [Database Model Handler](https://git.chalmers.se/courses/dit355/dit356-2022/t-11/t11-database-model-handler) and booking response data received from [Booking Validator](https://git.chalmers.se/courses/dit355/dit356-2022/t-11/t11-booking-validator).

>Example of Dental clinics data

```
{
    "id": 1,
    "name": "Your Dentist",
    "dentists": 3,
    "coordinate": {
        "longitude": 11.969388,
        "latitude": 57.707619
    },
    "openinghours": {
        "monday": "9:00-17:00",
        "tuesday": "8:00-17:00",
        "wednesday": "7:00-16:00",
        "thursday": "9:00-17:00",
        "friday": "9:00-15:00"
    }
}
```

>Example of Booking response

```
{
  "userid": "example@mail.com",
  "dentistId": 2,
  "date": "2020-12-14",
  "time": "9:30-10:00",
  "name": "John",
  "sessionId": "5355QPITzxL9-tGW1yOUMITYwIYk4Vdz"
}
```

### **<ins>Output Data</ins>**

The **output data** of this component is the information sent once the user provided necessary information and confirmed the booking.

>Example of Booking request

```
{
  "userid": "example@gmail.com",
  "dentistid": 2,
  "issuance": 1602406766314,
  "date": "2020-12-14",
  "time": "13:00-13:30",
  "name": "John",
  "sessionid": "5355QPITzxL9-tGW1yOUMITYwIYk4Vdz"
}
```

## **Development Tools**

> [Frontend Tools](./frontend/README.md#development-tools)

> [Backend Tools](./backend/README.md#development-tools)

> JavaScript IDE <br> Some alternatives: [Visual Studio Code](https://visualstudio.microsoft.com/downloads/), [WebStorm](https://www.jetbrains.com/webstorm/download/)

### **<ins>Setup</ins>**

| Description                                                                                      | Command                                                                                                                                                             |
|--------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Clone this repository                                                                            | <ins>Option 1</ins><br> Download as a `zip` file<br> <ins>Option 2</ins><br>`git clone git@git.chalmers.se:courses/dit355/dit356-2022/t-11/t11-web-application.git` |
| Open terminal and navigate to mosquitto root folder                                              | `mosquitto -c mosquitto.conf -v `                                                                                                                                   |
| Open the repo in JavaScript IDE                                                                  |                                                                                                                                                                     |
| Follow [Getting started with Backend](./backend/README.md#getting-started-with-backend) steps    |                                                                                                                                                                     |
| Follow [Getting started with Frontend](./frontend/README.md#getting-started-with-frontend) steps |                                                                                                                                                                     |











