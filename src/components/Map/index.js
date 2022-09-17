import React, { useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "100vh",
  zIndex: 0,
};

const center = {
  lat: 10.8773,
  lng: 106.8015,
};
const libraries = ["places"];

const currentPos = {
  lat: 10.877711116972243,
  lng: 106.80163278225437,
};

const foodShops = [
  {
    lat: 10.877631992125885, 
    lng: 106.80922815880977
  },
  {
    lat: 10.881349049562433, 
    lng:106.8112306239279
  },
  {
    lat: 10.882766400203234, 
    lng:106.8120717549753
  }
]

const coffeeShops = [
  {
    lat: 10.87499806630411,
    lng: 106.79941413329763,
  },
  {
    lat: 10.87383210946866,
    lng: 106.80002484110942,
  },
  {
    lat: 10.87358252706178,
    lng: 106.80106038913809,
  },
  {
    lat: 10.874007189543365,
    lng: 106.80157626658887,
  },
  {
    lat: 10.872947388585832,
    lng: 106.79872198927286,
  },
  {
    lat: 10.875440220610354, 
    lng: 106.80716356465716
  }
];

const buses = [
  {
    lat: 10.876810496070851,
    lng: 106.80183255752434,
  },
  {
    lat: 10.87714125671387,
    lng: 106.80286425603317,
  },
  {
    lat: 10.876835710167647,
    lng: 106.80296081555404,
  },
  {
    lat: 10.876424802249746,
    lng: 106.80247801794964,
  },
  {
    lat: 10.876066574372162,
    lng: 106.80255311979923,
  },
  {
    lat: 10.874886526555374,
    lng: 106.80001038574947,
  },
  {
    lat: 10.8745388330045,
    lng: 106.79986018205031,
  },
  {
    lat: 10.874191139048284,
    lng: 106.80199522034526,
  },
  {
    lat: 10.873495749919899,
    lng: 106.80234927192181,
  },
  {
    lat: 10.873674865456469,
    lng: 106.802993002061,
  },
  {
    lat: 10.87594014090085,
    lng: 106.80497783665682,
  },
  {
    lat: 10.875581912441032,
    lng: 106.80491346364288,
  },
  {
    lat: 10.876519627204136,
    lng: 106.80508512501333,
  },
  {
    lat: 10.876305355359042,
    lng: 106.80295454228998,
  },
];

function MyComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyACB4Wr6HTShXaKeAq2XWPW1NSsv5trMTk",
    libraries: libraries,
  });

  const [map, setMap] = React.useState(null);

  const options = React.useMemo(
    () => ({
      mapId: "4539513436e9d9cb",
      disableDefaultUI: true,
    }),
    []
  );

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
      options={options}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <>
        <Marker position={currentPos} />
        {buses.map((bus) => {
          return <Marker icon={{url: "/bus_marker.png", scaledSize:{width: 40, height: 46}}} position={bus} />;
        })}
        {coffeeShops.map((shop) => {
          return <Marker icon={{url: "/coffee_marker.png", scaledSize: {width:40, height: 46}}} position={shop}/>
        })}
      </>
        {foodShops.map((shop)=>{
        return <Marker icon={{url: "/food_marker.png", scaledSize: {width: 40, height: 46}}} position={shop} />
      })}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
