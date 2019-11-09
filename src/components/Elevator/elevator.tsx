import React from 'react';
import posed from 'react-pose'
import './style.css';

interface ElevatorProps {
  clickHandler: any
  position: string,
}

const Box = posed.div({
  hidden: { bottom: 0, transition: { duration: 5000 } },
  visible: { bottom: 2500, transition: { duration: 5000 } }
});

export default class Example extends React.Component<ElevatorProps> {
  state = { isVisible: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 10000);
  }

  render() {
    const { isVisible } = this.state;
    return (
      <div className={this.props.position === "left" ? "leftElevator" : "rightElevator"}>
        <Box className="elevatorCar" pose={isVisible ? 'visible' : 'hidden'} />
      </div>
    )
  }
}