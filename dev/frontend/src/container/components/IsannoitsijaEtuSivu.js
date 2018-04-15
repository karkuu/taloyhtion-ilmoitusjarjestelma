import React from 'react';

import IsannoitsijaEtuSivuLista from './IsannoitsijaEtuSivuLista';

export default class EtuSivu extends React.Component {

	componentDidMount() {
		this.props.setPageTittle("Etusivu")
		this.props.getNotificationsNew();
	}


  render() {
    return (
		<div className="card">
		  <div className="card-body">
		    <h3 className="card-title">Tervetuloa {this.props.loggedUser.first_name}</h3>
		    <p className="card-text mb-5">Viimeinen sisäänkirjautuminen {this.props.loggedUser.last_login}</p>

		    <h4>Uusimmat ilmoitukset</h4>
		  <table className="table table-bordered mb-5">
		    <thead>
				
		    </thead>
		  
				<IsannoitsijaEtuSivuLista notificationsList={this.props.notificationsList}
																	updateNotificationStatus={this.props.updateNotificationStatus}/>
		   
		  </table>

		  <a href="/admin_ilmoitukset" className="card-link">
		  <img src="img/ilmoitukset.svg" className="img-fluid" alt="[H]" height="20" width="20"/> Kaikki ilmoitukset</a>
		  <a href="/tiedot" className="card-link">
		  <img src="img/tiedot.svg" className="img-fluid" alt="[H]" height="20" width="20"/> Omat tiedot</a>
		  <a href="/asetukset" className="card-link">
		  <img src="img/asetukset.svg" className="img-fluid" alt="[H]" height="20" width="20"/> Asetukset</a>
		  
		  </div>
		</div>
    );
  }
}
