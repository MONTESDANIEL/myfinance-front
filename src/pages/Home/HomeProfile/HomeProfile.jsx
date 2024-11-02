import ProfileInfo from './ProfileInfo';
import ProfileSecurity from './ProfileSecurity';
import ProfileTags from './ProfileTags';
import ProfileBudget from './ProfileBudget';

const HomeProfile = () => {
    return (
        <div className="container-fluid">
            <div className="d-lg-none navbar container-fluid justify-content-center">
                <ul className="nav nav-tabs justify-content-center" id="v-pills-tab" role="tablist">
                    <li className="nav-item">
                        <button className="nav-link active text-secondary" id="v-pills-userdata-tab-i" data-bs-toggle="pill" data-bs-target="#v-pills-userdata" type="button" role="tab" aria-controls="v-pills-userdata" aria-selected="true">
                            <i className="bi bi-person"></i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link text-secondary" id="v-pills-configuration-tab-i" data-bs-toggle="pill" data-bs-target="#v-pills-configuration" type="button" role="tab" aria-controls="v-pills-configuration" aria-selected="false">
                            <i className="bi bi-gear"></i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link text-secondary" id="v-pills-tags-tab-i" data-bs-toggle="pill" data-bs-target="#v-pills-tags" type="button" role="tab" aria-controls="v-pills-tags" aria-selected="false">
                            <i className="bi bi-tags"></i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link text-secondary" id="v-pills-budget-tab-i" data-bs-toggle="pill" data-bs-target="#v-pills-budget" type="button" role="tab" aria-controls="v-pills-budget" aria-selected="false">
                            <i className="bi bi-wallet"></i>
                        </button>
                    </li>
                </ul>
            </div>

            <div className="d-none d-lg-block">
                <ul className="nav nav-tabs justify-content-center" id="v-pills-tab" role="tablist">
                    <li className="nav-item">
                        <button className="nav-link active text-secondary" id="v-pills-userdata-tab" data-bs-toggle="pill" data-bs-target="#v-pills-userdata" type="button" role="tab" aria-controls="v-pills-userdata" aria-selected="true">
                            <i className="bi bi-person"> Datos personales</i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link text-secondary" id="v-pills-configuration-tab" data-bs-toggle="pill" data-bs-target="#v-pills-configuration" type="button" role="tab" aria-controls="v-pills-configuration" aria-selected="false">
                            <i className="bi bi-gear"> Configuración</i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link text-secondary" id="v-pills-tags-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tags" type="button" role="tab" aria-controls="v-pills-tags" aria-selected="false">
                            <i className="bi bi-tags"> Categorías y Etiquetas</i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link text-secondary" id="v-pills-budget-tab" data-bs-toggle="pill" data-bs-target="#v-pills-budget" type="button" role="tab" aria-controls="v-pills-budget" aria-selected="false">
                            <i className="bi bi-wallet"> Presupuesto</i>
                        </button>
                    </li>
                </ul>
            </div>

            <div className="tab-content container-fluid py-3" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-userdata" role="tabpanel" aria-labelledby="v-pills-userdata-tab" tabIndex="0">
                    <div className="container bg-dark-subtle rounded p-3">
                        <ProfileInfo />
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-configuration" role="tabpanel" aria-labelledby="v-pills-configuration-tab" tabIndex="0">
                    <div className="container bg-dark-subtle rounded p-3">
                        <ProfileSecurity />
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-tags" role="tabpanel" aria-labelledby="v-pills-tags-tab" tabIndex="0">
                    <div className="container bg-dark-subtle rounded p-3">
                        <ProfileTags />
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-budget" role="tabpanel" aria-labelledby="v-pills-budget-tab" tabIndex="0">
                    <div className="container bg-dark-subtle rounded p-3">
                        <ProfileBudget />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeProfile;