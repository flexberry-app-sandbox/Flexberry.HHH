import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВидыСтрEnum from '../enums/i-i-s-h-h-h-виды-стр';

export default FlexberryEnum.extend({
  enum: ВидыСтрEnum,
  sourceType: 'IIS.HHH.ВидыСтр'
});
