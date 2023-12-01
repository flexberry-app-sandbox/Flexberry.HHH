import {
  defineNamespace,
  defineProjections,
  Model as ЗаявНаСтрMixin
} from '../mixins/regenerated/models/i-i-s-h-h-h-заяв-на-стр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаявНаСтрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
