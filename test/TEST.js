/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.customMapStyles = [{
    label: "Local",
    value: 11,
    styles: {
        colors: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#aad2e3"
            },
            {
                "visibility": "on"
            }
        ]
    }
    ]
}
}];

window.customMapStyles=[
  {
    label:"Gamma Dark",
    value: 11,
    styles:{
        marker:{
            imgUrl:"/universal/images-v6/icons/cover-pages-map-marker-pin-dark-2x.png",
            naturalWidth:48,
            naturalHeight:64
        },
        colors: [
            {
                featureType:"all",
                elementType:"labels.text.fill",
                stylers: [
                    {
                        saturation:36
                    },
                    {
                        color:"#000000"
                    },
                    {
                        lightness:40
                    }
                ]
            },
            {
                featureType:"all",
                elementType:"labels.text.stroke",
                stylers: [
                    {
                        visibility:"on"
                    },
                    {
                        color:"#000000"
                    },
                    {
                        lightness:16
                    }
                ]
            },
            {
                featureType:"all",
                elementType:"labels.icon",
                stylers:[{visibility:"off"
                    }
                ]
            },
            {
                featureType:"administrative",
                elementType:"geometry.fill",
                stylers:[{color:"#000000"
                    },
                    {
                        lightness:20
                    }
                ]
            },
            {
                featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#0f1f2e"},{lightness:17}]}]
    }
  }];
  
