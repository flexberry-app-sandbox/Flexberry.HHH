import {
  defineNamespace,
  defineProjections,
  Model as ДоговорСтрMixin
} from '../mixins/regenerated/models/i-i-s-h-h-h-договор-стр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДоговорСтрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
