import {
  defineNamespace,
  defineProjections,
  Model as СтрПолисMixin
} from '../mixins/regenerated/models/i-i-s-h-h-h-стр-полис';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СтрПолисMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
