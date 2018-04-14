import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

import EtuSivu from './components/EtuSivu';
import IsannoitsijaIlmoitukset from './components/IsannoitsijaIlmoitukset';
import IsannoitsijaHenkilot from './components/IsannoitsijaHenkilot';
import IsannoitsijaEtuSivu from './components/IsannoitsijaEtuSivu';
import IsannoitsijaTiedot from './components/IsannoitsijaTiedot';
import IsannoitsijaTaloyhtiot from './components/IsannoitsijaTaloyhtiot';
import Ilmoitukset from './components/Ilmoitukset';
import Ilmoituslomake from './components/Ilmoituslomake';
import Tiedot from './components/Tiedot';

export default class ContainerContents extends React.Component
{

	render()
	{
	
		return (
			<Switch>
				<Route exact path="/"
					render={
						() => !this.props.isLogged  ?
						(<Redirect to="/login"/>) : this.props.userGroup === 3 ?
						(<IsannoitsijaEtuSivu loggedUser={this.props.loggedUser}/>) :
						(<EtuSivu/>)	
					}/>

				<Route path="/etusivu"
					render={() => this.props.isLogged ?
						(<IsannoitsijaEtuSivu/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/ilmoitukset"
					render={() => this.props.isLogged ?
						(<Ilmoitukset/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/ilmoituslomake"
					render={() => this.props.isLogged ?
						(<Ilmoituslomake/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/tiedot"
					render={() => this.props.isLogged ?
						(<Tiedot/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/admin_ilmoitukset"
					render={() => this.props.isLogged ?
						(<IsannoitsijaIlmoitukset notificationsList={this.props.notificationsList}
													getNotifications={this.props.getNotifications}/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/admin_henkilot"
					render={() => this.props.isLogged?
						(<IsannoitsijaHenkilot userList={this.props.userList}
												getUsers={this.props.getUsers}
												notificationsList={this.props.notificationsList}
												getNotificationsByUidStatus={this.props.getNotificationsByUidStatus}
												setUserPropsState={this.props.setUserPropsState}
												getUsersByName={this.props.getUsersByName}
												getUsersByAddress={this.props.getUsersByAddress}/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/admin_etusivu"
					render={() => this.props.isLogged ?
						(<IsannoitsijaEtuSivu/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/admin_tiedot"
					render={() => this.props.isLogged ?
						(<IsannoitsijaTiedot/>) :
						(<Redirect to="/"/>)
						}/>
				<Route path="/admin_yhtiot"
					render={() => this.props.isLogged ?
						(<IsannoitsijaTaloyhtiot housingCompList={this.props.housingCompList}
												getHousingCompanies={this.props.getHousingCompanies}
												getCompaniesByName={this.props.getCompaniesByName}
									  			getCompaniesByAddress={this.props.getCompaniesByAddress}
												setCompanyPropsState={this.props.setCompanyPropsState}/>) :
						(<Redirect to="/"/>)
						}/>

			</Switch>
		);
	}
}
