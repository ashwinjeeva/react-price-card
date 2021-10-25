import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./card"

function App() {
  return (
    <div className="top py-5">
      <div className="container">
        <div className="row justify-content-center">
          <Card
          name="Free"
          price="$0"
          users="Single User"
          usersc="true"
          storage="5GB Storage"
          storagec="true"
          project="Unlimited public project"
          projectc="true"
          access="Community access"
          accessc="true"
          privateprojects="Unlimited private project"
          privateprojectsc="false"
          support="Dedicated phone support"
          supportc="false"
          subdomain="Free subdomain"
          subdomainc="false"
          reports="Monthly status reports"
          reportsc="false"/>

<Card
          name="Super"
          price="$10"
          users="Single User"
          usersc="true"
          storage="5GB Storage"
          storagec="true"
          project="Unlimited public project"
          projectc="true"
          access="Community access"
          accessc="true"
          privateprojects="Unlimited private project"
          privateprojectsc="true"
          support="Dedicated phone support"
          supportc="true"
          subdomain="Free subdomain"
          subdomainc="false"
          reports="Monthly status reports"
          reportsc="false"/>

<Card
          name="Pro"
          price="$20"
          users="Single User"
          usersc="true"
          storage="5GB Storage"
          storagec="true"
          project="Unlimited public project"
          projectc="true"
          access="Community access"
          accessc="true"
          privateprojects="Unlimited private project"
          privateprojectsc="true"
          support="Dedicated phone support"
          supportc="true"
          subdomain="Free subdomain"
          subdomainc="true"
          reports="Monthly status reports"
          reportsc="true"/>
         
         </div>
      </div>
  
    </div>
  );
}

export default App;
