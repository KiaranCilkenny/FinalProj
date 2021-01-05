import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Create } from './components/create';
import { Read } from './components/read';
import { Edit } from './components/edit';
import { Push } from './components/push';
import { Pull } from './components/pull';
import { Legs } from './components/legs';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/"><Image style={{height: "4rem"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEUAAAD///9ubm7p6ekyMjLLy8vT09Pv7+9RUVGUlJTBwcH4+Pjg4OBEREQ/Pz/Z2dmKioqBgYGtra05OTkfHx8mJiYtLS15eXldXV22traNjY1LS0ulpaWTk5MZGRlra2sPDw+cnJxXV1d9fX0LCwu8vLy9H4B5AAAEn0lEQVR4nO2d0XaiMBRFQQQUsAi0ggoCrfz/L05ql1MLSIJclMs6+3FW4LhHpJDkJpoGAAAAAAAAAAAAAAAAAAAAAAAAAADAeGwWQVYK1ofDYRsEQRzHizw5fhDHvB+TfCHOLRK2Imn9HZkFiw1xTJOotGxXv+IKbNs2DM83szNlTuZYnmGIc39H/ObZVvpGGdMkMfV7uOGJLKZI3bs5Vk4W08LRvxssIFM8dwjqurciimlhd/8bvFASXahld4y1o4lpYd2drLtfJDELW5KTksS0EHVdOxfCd4KYUyqL0ce62yykyc8yXBDEtAFDGCoCQxgOQG64p3j+fg9hCMOHmZthEa3EO6ggv74yTM/wdPmAD72Af+wvr54XvOVkDZfe/09phMvOs9bIbk9nqBtWzzY0bv+1VI6o/UHqYehQvLl97B801Peqf46zv29JfAz1VO0VfOX9PYyRoaHWh1N/aGJkqIcqAct6ZwwnQ1Plhrqq96dxMvRV+uGS2s+wj6HSf6GMXfW4oafyQ8zrRz3d0Hnc0FZ5nmv05bEyjBUCYs6GbjB3Q30LQ0FQ79lmZZiNbGhFBIaNR44+hmsYCrb1g2AIQxjCkNywMZTdw9CnGJyNLBjCEIYwhOGsDT2KyZFvnZPnYAhDGMIQhuwNjSOB4aY+cAJDGMJwfoZZ/aA+hiT30iGG8l79oigHGNrxajhx42P3MCyLotUrSR3TtHzPMwyjUezQw1C3KZDH3De0hYHn+ZZpOuHviPcp7Cyk6GP4JO4b3uJe50gtJTMD2BrqunPpv5VOq2Zs+DPxPJfV+nA21GPxFUpHXFkbWictkp6OtaH+pn1K2/A2zLVc2oa34ZcWS9vwNtxqX9I23A0bA6INYPgCYHjDVgukbbgbzv9eOnfDQEukbXgbLrSNtA1vw5X2Lm3E2tD+kC92wdvwezGSo6zzjrOhcakwaUyZrbdibHj4abft7r/ja+j+7x9eOXbH98jU0LXNT+2X1TrcV9+9wpbVOKiHoetbw/Gly+B0GBriBKbpVPtwfet3w/lcDjA0KeaXRkPml5aFvIx0yMgMSb3FpGfQvt5QpZ4bhjCcviHvO42K4YG14dj1FjCEIQxhCMM5GI5d6fx6QxbV6jCEIQxhOAPDl69tMsSQx/o0MIQhDGE4A8OXr9c2yFBl/wnWhkor0sEQhs8wvNb7zNcwgWEnn69eoXWIoZd0nvqHor5gOCdDtU21NrV6eEaGqtt5LR5esfzFhq7Kr7BFhY+hsqA40r/Zko+Hoet6/RY4Sg5pWDmm5fueeV2ke3qGO9Pzfct0qjDNVO6iMqZjSFH23wYMYagIDAVj7Sg7HcPX7fD4LEOKibptTMdwrK1Wp2NIvYH0lckYuhSbELYhL90n2YVFvkeJURDEtFFIF1JTGZ+UIy1rtUhi2pDVKpIUI4jLVLZUx3g7c5+6d0RT2sZGhcZmPn8h3OK8QVR11LN4KqMiasRdis6o+8dH6d1KI5Py2knuXqhGOqqgIE8rp42S9jljWbamVGkur/oZzG7ZBnlMa8p4+8YDAAAAAAAAAAAAAAAAAAAAAAAAAAAF/gGzmIYP8LYs6wAAAABJRU5ErkJggg==" rounded /></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Exercises</Nav.Link>
              <Nav.Link href="/create">Add Exercise</Nav.Link>
            </Nav>
          </Navbar>

          <br />
          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/create' component={Create} exact />
            <Route path='/read' component={Read} exact />
            <Route path='/edit/:id' component={Edit}></Route>
            <Route path='/push' component={Push}></Route>
            <Route path= '/read' component={Read}></Route>
            <Route path= '/pull' component={Pull}></Route>
            <Route path= '/legs' component={Legs}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
