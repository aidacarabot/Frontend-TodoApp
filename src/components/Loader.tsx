import { ClipLoader } from 'react-spinners'

const Loader = () => (
  <div
    style={{
      position: 'fixed',
      inset: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'transparent',
      zIndex: 9999
    }}
  >
    <ClipLoader color='#4ea8de' size={48} />
  </div>
)

export default Loader
