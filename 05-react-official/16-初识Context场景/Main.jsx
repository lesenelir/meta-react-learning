import Header from './components/Header'
import BottomNav from './components/BottomNav'


class Main extends React.Component {

  state = {
    navDate: [
        '第1',
        '第2',
        '第3',
        '第4'
    ]
  }

  render() {
    return (
        <div>
          <Header>标题</Header>
          <div style={{marginTop: 88 + 'px'}}>
            <button onClick={() => this.props.themeChange('black')}>black</button>
            <button onClick={() => this.props.themeChange('red')}>red</button>
            <button onClick={() => this.props.themeChange('orange')}>orange</button>
            <button onClick={() => this.props.themeChange('purple')}>purple </button>
          </div>
          <BottomNav
              data={this.state.navDate}
          />
        </div>
    )
  }
}

export default Main
