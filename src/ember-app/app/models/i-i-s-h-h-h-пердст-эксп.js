import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПердстЭкспMixin
} from '../mixins/regenerated/models/i-i-s-h-h-h-пердст-эксп';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПердстЭкспMixin, Validations, {
});

defineProjections(Model);

export default Model;
