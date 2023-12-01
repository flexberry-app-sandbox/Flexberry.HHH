import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДоговорСтрMixin
} from '../mixins/regenerated/models/i-i-s-h-h-h-договор-стр';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДоговорСтрMixin, Validations, {
});

defineProjections(Model);

export default Model;
