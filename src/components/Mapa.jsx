import GoogleMapReact from 'google-map-react';

const Marcador = ({ hover, texto }) => {
  return (
    <div className="glyphicon glyphicon-map-marker">
      <div>{texto.text}</div>
      
    </div>
  );
};

const Mapa = (props) => {
  const LAT = -2.189949;
  const LNG = -79.887703;
  const marcadores = [{
      texto: "priermo",
      latitud: -2.189949,
      longitud: -79.887703
  }];

  return (
    <div style={{ height: "500px", display: "flex" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        zoom={4.5}
        center={{ lat: LAT, lng: LNG }}
      >
        {marcadores.map((marcador) => (
          <Marcador
            lat={marcador.latitud}
            lng={marcador.longitud}
            texto={marcador.texto}
          />
        ))}
        ;
      </GoogleMapReact>
    </div>
  );
};

export default Mapa;
