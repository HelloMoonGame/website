import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'

interface FeatureProps {
  name: string
  description: string
  icon: IconProp
}

const useStyles = makeStyles({
  squareIcon: {
    width: '50%',
    height: '6rem',
  },
})

const Feature = ({ name, description, icon }: FeatureProps): JSX.Element => {
  const classes = useStyles()
  return (
    <Grid item key="{name}" xs={6} sm={4}>
      <FontAwesomeIcon
        icon={icon}
        size="3x"
        fixedWidth
        className={classes.squareIcon}
      />
      <h3>{name}</h3>
      <p>{description}</p>
    </Grid>
  )
}

export default Feature
