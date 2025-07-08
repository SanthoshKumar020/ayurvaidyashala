import { GiLotus } from 'react-icons/gi';

const WaveDivider = () => (
  <section className="relative w-full h-24 overflow-hidden bg-white">
    {/* SVG Wave Shape */}
    <svg
      className="absolute top-0 left-0 w-full h-full"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="#DCFCE7"
        d="M0,64L60,74.7C120,85,240,107,360,101.3C480,96,600,64,720,58.7C840,53,960,75,1080,96C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      />
    </svg>

    {/* Centered Lotus Icon */}
    <div className="absolute inset-0 flex items-center justify-center">
      <GiLotus className="text-green-700 text-4xl drop-shadow-xl" />
    </div>
  </section>
);

export default WaveDivider;