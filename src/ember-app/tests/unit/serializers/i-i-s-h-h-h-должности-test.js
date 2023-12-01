import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-h-h-h-должности', 'Unit | Serializer | i-i-s-h-h-h-должности', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-h-h-h-должности',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-h-h-h-виды-стр',
    'transform:i-i-s-h-h-h-рез-эксп',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
