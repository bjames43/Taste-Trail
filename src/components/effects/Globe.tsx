
import Globe from 'react-globe.gl';

const GlobeComponent = () => {
    return (
        <Globe
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            backgroundColor="rgba(0, 0, 0, 0)"
            animateIn={true}
            showGlobe={true}
            showGraticules={true}
            onGlobeClick={() => console.log('Globe clicked!')}
        />
    );
};

export default GlobeComponent; 