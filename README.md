## Functional Programming 20-21
# _titleProject_
[_imageOfProduct_]
[_linkOfDeployment_Netlify_]

## :heart_eyes: Concept
### Research Question
>What is the ideal place in the city to live as a driver of an electric car?
### Idea
I want to make a data visualization, using D3, to show the reader how 'ideal' the life is of an electric car driver who lives in the city while still having to charge his / her car

## Data  
I think I can use [this data](https://github.com/ralfz123/functional-programming/wiki/Onderzoek-%F0%9F%94%8D#data) for my subject.
The data variables I think I can use, are:
- `AreaId` - [this](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIED/adw6-9hsg) or [this](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEOMETRIE-GEBIED/nsk3-v9n7)
- `GeoDataAsText` - [Dataset](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEOMETRIE-GEBIED/nsk3-v9n7)
- `ChargingPointCapacity` - [Dataset](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s)

👉 Click [here](https://github.com/ralfz123/functional-programming/wiki/Onderzoek-%F0%9F%94%8D) for more details about my project research.

### Dataset structure
```
{
    "areamanagerid":"599",
    "areaid":"599_KRZM",
    "startdatespecifications":"20141101000000",
    "capacity":"1700",
    "enddatespecifications":"20991231235959",
    "chargingpointcapacity":"4",
    "disabledaccess":"0",
    "maximumvehicleheight":"0"
}
```


### Data cleaning
_Here comes the code I've used to clean up the data_

## :nerd_face: Technical summary
**[nameOfApp]**  is built, using:
- D3
- [Functional Programming Patterns](https://github.com/ralfz123/functional-programming/wiki/Functional-Patterns)
- ...

## :gear: Install
1. Clone the repository:  
```
git clone https://github.com/ralfz123/functional-programming.git
```

2. Install dependencies   
```
npm install
```

3. To run the app   
```
npm run startdev
```


## :file_folder: Resources
Credits to [Danny de Vries](https://github.com/dandevri) && [Laurens Aarnoudse](https://github.com/Razpudding) && [Robert Spier](https://github.com/roberrrt-s) for giving interesting lectures about Functional Programming and how to deal with it.

- Aarnoudse, L.  (2020, October 28). Rubric. Consulted from https://github.com/cmda-tt/course-20-21

## :cop: License
This project from [Ralf](https://github.com/ralfz123) has a [MIT © License](https://github.com/ralfz123/prototype_datingapp/blob/master/LICENSE.md)
