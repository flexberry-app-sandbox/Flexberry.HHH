import {
  defineNamespace,
  defineProjections,
  Model as ПердстЭкспMixin
} from '../mixins/regenerated/models/i-i-s-h-h-h-пердст-эксп';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПердстЭкспMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
