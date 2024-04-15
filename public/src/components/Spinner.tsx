import RingLoader from 'react-spinners/RingLoader'

const override = {
    display:'block',
    margin: '100px auto'
}

const Spinner = ({loading=false}) => {
  return (
    <RingLoader
            color="#36d7b7"
            loading={loading}
            size={150}
            cssOverride={override}
          />
  )
}

export default Spinner
