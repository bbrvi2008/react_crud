import React from 'react';
import { YMaps, Map, Placemark, Polyline } from 'react-yandex-maps';

class MyMap extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    const curCenter = this.props.centerCoordinates;
    const newCenter = nextProps.centerCoordinates;
    return !(curCenter != newCenter);
  }


  render() {
    const { points, centerCoordinates, onEditPoint, onUpdateCenterCoordinates } = this.props;
    const pointsRoute = points.map((point) => point.coordinates);

    const mapState = { 
      center: centerCoordinates, 
      zoom: 10, 
      controls: [
        'fullscreenControl', 
        'zoomControl'
      ] 
    };
    return <div className="map">
      <YMaps>
        <Map 
          state={mapState} 
          width={`100%`} height={`100%`}
          events={{
            onActionEnd: function(e) {
              var centerCoordinates = e.get('target').getCenter();
              onUpdateCenterCoordinates(centerCoordinates);
            }
          }}
        >
          <Polyline
            geometry={{
              // Specifying the coordinates of the vertices of the polyline.
              coordinates: pointsRoute,
            }}
            // Describing the properties of the geo object.
            /*properties={{
              // The contents of the balloon.
              balloonContent: 'Ломаная линия',
            }}*/
            // Setting options for the geo object.
            options={{
              // Disabling the close button on a balloon.
              balloonCloseButton: false,
              // The line color.
              strokeColor: '#49cbff',
              // Line width.
              strokeWidth: 2,
              // The transparency coefficient.
              strokeOpacity: 0.9,
            }}
          />

          {points.map((point) => (
              <Placemark
                key={point.id}
                geometry={{
                  coordinates: point.coordinates
                }}
                properties={{
                  balloonContent: point.title
                }}
                options={{
                  iconLayout: 'default#image',
                  draggable: true
                  
                }}
                events={{
                  onDrag: function(e) {
                    var coordinates = e.get('target').geometry.getCoordinates();
                    onEditPoint(point.id, coordinates);
                  }
                }}
              />
            )
          )}
        </Map>
      </YMaps>
    </div>;
  }
};

export default MyMap;