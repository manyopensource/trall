import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FullCard.scss';
import { bindActionCreators } from 'redux';
import { closeCard } from './../../actions';

class FullCard extends Component {
  closeCard = () => {
    console.log('closeCard');
    this.props.closeCard();
  };

  render = () => {
    return (
      <div className="full-card">
        <div className="full-card__title">{this.props.id}</div>
        Laborum cupidatat est magna aliquip consequat aliqua id et et occaecat
        mollit aliquip. Pariatur qui elit eu ex culpa velit adipisicing sit
        fugiat consequat esse. Ipsum nisi non exercitation sunt est exercitation
        consequat anim aute consectetur aliquip nostrud sint velit. Cillum Lorem
        dolor fugiat Lorem deserunt enim magna est. Est enim commodo in quis non
        proident. Occaecat ea aute duis ad exercitation adipisicing. Nisi culpa
        aute amet occaecat minim cupidatat enim sint deserunt non enim
        reprehenderit officia aliquip. Culpa ex consequat in cupidatat minim
        dolor aliquip pariatur ex Lorem ea qui non. Laboris laboris in aliqua
        exercitation. Nisi ex incididunt laborum est mollit ut id sunt mollit
        nostrud culpa nulla occaecat. Occaecat adipisicing aliqua magna commodo
        ea mollit pariatur cillum id veniam cupidatat fugiat. Eu officia sunt
        commodo sunt laboris eu adipisicing do irure veniam ad ut tempor. Ea
        tempor id adipisicing ea nisi. Reprehenderit Lorem duis esse pariatur
        duis mollit. Velit enim labore ex duis cupidatat culpa non commodo
        mollit eiusmod cillum. Sunt tempor irure sint irure enim eiusmod aute
        anim aliquip aliquip labore minim eiusmod proident. Dolore voluptate
        proident voluptate officia cillum deserunt esse proident velit. Ullamco
        dolore ipsum elit elit enim amet eiusmod nostrud et amet ullamco. Sint
        excepteur anim occaecat irure eiusmod est elit eu duis adipisicing.
        Laboris exercitation incididunt non labore sunt ea voluptate. Qui sunt
        adipisicing sunt id minim consequat excepteur enim. Officia ad nisi
        cillum exercitation. Laboris anim consequat elit do qui nostrud mollit
        exercitation elit. Ullamco occaecat irure amet occaecat consequat duis
        cillum fugiat magna. Amet nostrud excepteur nulla irure deserunt aute
        anim mollit incididunt voluptate id aliquip. Irure incididunt voluptate
        officia deserunt do nulla sint incididunt non dolore qui dolore non
        magna. Id ex officia deserunt laborum non. Exercitation laboris nostrud
        occaecat exercitation est consectetur enim minim voluptate voluptate
        cillum eiusmod cupidatat. Ea elit Lorem cillum nostrud in elit dolor
        laborum amet voluptate consectetur. Officia do cupidatat ad id qui non
        veniam nulla pariatur proident nulla nulla ex dolor. Deserunt fugiat
        consectetur eiusmod ex. Ipsum laborum cupidatat esse dolore cillum Lorem
        adipisicing non excepteur fugiat magna minim commodo ex. Cupidatat
        incididunt est labore quis anim irure aliqua. Sit id do proident eu
        dolor in nisi amet pariatur. Pariatur enim aliquip non aute veniam nisi
        nostrud qui aliquip aliquip laborum id elit. Dolore cupidatat elit
        mollit labore magna occaecat irure amet exercitation voluptate esse
        laboris est. Deserunt Lorem qui officia esse adipisicing quis et laboris
        ea. Nisi veniam tempor sunt ullamco tempor ex commodo ullamco magna. Ad
        id quis adipisicing dolore non. Reprehenderit commodo incididunt velit
        sint in ea amet anim voluptate exercitation laboris. Quis reprehenderit
        do ipsum elit ex fugiat commodo sit. Ea adipisicing qui proident laborum
        laborum qui proident eu enim eu irure amet. Aute voluptate commodo id ex
        ex officia cillum esse ullamco veniam. Exercitation et amet id eu nulla
        nostrud. Eiusmod adipisicing pariatur sunt laborum deserunt ullamco
        culpa commodo do tempor laboris culpa. Cillum irure nisi dolore enim
        quis irure adipisicing enim excepteur. Commodo laborum fugiat mollit
        culpa exercitation nulla dolore esse occaecat. Sunt nostrud enim aliquip
        exercitation sint consectetur pariatur eiusmod Lorem et ut sint. Eu duis
        ad non et consequat consectetur occaecat eu incididunt occaecat ex
        fugiat laboris. Cillum do esse amet id fugiat cillum. Incididunt ex nisi
        non cillum in adipisicing fugiat esse proident ipsum consequat amet et.
        Laboris do excepteur aliquip magna amet duis ex labore qui cillum ea.
        Sunt id ex dolor minim officia tempor et. Dolor sunt duis tempor qui
        ullamco culpa quis in magna amet nulla. Eiusmod adipisicing aute nulla
        ad ullamco labore irure officia. Dolore tempor ut fugiat laborum nulla
        laborum cupidatat Lorem magna commodo. Reprehenderit cupidatat deserunt
        anim ut mollit ea eiusmod velit amet esse exercitation qui nostrud
        irure. Do sint mollit aliqua sit magna labore ipsum sint irure fugiat
        consequat in. Do cupidatat voluptate occaecat eu. Deserunt consequat
        ullamco deserunt aliquip pariatur fugiat ullamco. Ea pariatur est
        eiusmod cupidatat ex do consequat nostrud cillum qui proident amet
        consequat laboris. Tempor sunt eu veniam excepteur irure sunt. Cillum
        sit non ullamco veniam mollit elit deserunt. Esse voluptate sit ea
        excepteur laborum pariatur Lorem ullamco minim est.
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      closeCard
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(FullCard);
