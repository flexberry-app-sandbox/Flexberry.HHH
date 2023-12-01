import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  стрПремия: DS.attr('number'),
  стрСлучаи: DS.attr('string'),
  клиент: DS.belongsTo('i-i-s-h-h-h-клиент', { inverse: null, async: false }),
  пердстЭксп: DS.belongsTo('i-i-s-h-h-h-пердст-эксп', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-h-h-h-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-h-h-h-договор-стр.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-h-h-h-договор-стр.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  стрПремия: {
    descriptionKey: 'models.i-i-s-h-h-h-договор-стр.validations.стрПремия.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  стрСлучаи: {
    descriptionKey: 'models.i-i-s-h-h-h-договор-стр.validations.стрСлучаи.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-h-h-h-договор-стр.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  пердстЭксп: {
    descriptionKey: 'models.i-i-s-h-h-h-договор-стр.validations.пердстЭксп.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-h-h-h-договор-стр.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДоговорСтрE', 'i-i-s-h-h-h-договор-стр', {
    стрСлучаи: attr('Стр случаи', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    стрПремия: attr('Стр премия', { index: 2 }),
    номер: attr('Номер', { index: 3 }),
    клиент: belongsTo('i-i-s-h-h-h-клиент', 'Клиент', {
      фИО: attr('ФИО', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИО' }),
    пердстЭксп: belongsTo('i-i-s-h-h-h-пердст-эксп', 'Пердст эксп', {
      основПровед: attr('Основ провед', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'основПровед' }),
    сотрудники: belongsTo('i-i-s-h-h-h-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ДоговорСтрL', 'i-i-s-h-h-h-договор-стр', {
    стрСлучаи: attr('Стр случаи', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    стрПремия: attr('Стр премия', { index: 2 }),
    номер: attr('Номер', { index: 3 }),
    клиент: belongsTo('i-i-s-h-h-h-клиент', 'ФИО', {
      фИО: attr('ФИО', { index: 4 })
    }, { index: -1, hidden: true }),
    пердстЭксп: belongsTo('i-i-s-h-h-h-пердст-эксп', 'Основ провед', {
      основПровед: attr('Основ провед', { index: 5 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-h-h-h-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
