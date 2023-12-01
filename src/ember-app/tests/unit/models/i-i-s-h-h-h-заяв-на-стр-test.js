import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-h-h-h-заяв-на-стр', 'Unit | Model | i-i-s-h-h-h-заяв-на-стр', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-h-h-h-договор-стр',
    'model:i-i-s-h-h-h-должности',
    'model:i-i-s-h-h-h-заяв-на-стр',
    'model:i-i-s-h-h-h-клиент',
    'model:i-i-s-h-h-h-пердст-эксп',
    'model:i-i-s-h-h-h-сотрудники',
    'model:i-i-s-h-h-h-стр-полис',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
