import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface FeatureProps {
  name: string
  description: string
  icon
}

const Feature = ({ name, description, icon }: FeatureProps) => (
  <div className="col-md-4 text-center pb-5">
    <div className="mb-3">
      <div className="d-inline-block p-5 bg-white rounded-circle">
        <FontAwesomeIcon
          icon={icon}
          size="3x"
          fixedWidth
          className="square-icon"
        />
      </div>
    </div>
    <h4>{name}</h4>
    <p>{description}</p>
  </div>
)

export default Feature
