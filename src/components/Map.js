import React from 'react';
import { YMaps, Map, Placemark, Polyline } from 'react-yandex-maps';

class MyMap extends React.Component {
  

  render() {
    const { points, onEditPoint } = this.props;
    const pointsRoute = points.map((point) => point.coordinates);

    const mapState = { center: [55.76, 37.64], zoom: 10};
    return <div className="map">
      <YMaps>
        <Map state={mapState} width={`100%`} height={400} >
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
                  onDragEnd: function(e) {
                    var coordinates = e.originalEvent.target.geometry.getCoordinates();
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