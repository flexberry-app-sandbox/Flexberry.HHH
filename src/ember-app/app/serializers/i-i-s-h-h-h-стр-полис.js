import { Serializer as СтрПолисSerializer } from
  '../mixins/regenerated/serializers/i-i-s-h-h-h-стр-полис';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СтрПолисSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
