import * as React from 'react'
import High from './High'

interface BaseProps {
  theme?: string
}

interface HelloProps extends BaseProps {
    namerino: string
}

class Hello extends React.Component<HelloProps, void> {
  render() {
    return (
      <div>helloo {this.props.namerino}. the theme is {this.props.theme}
      </div>
    );
  }
}

export default High<HelloProps>(Hello)
