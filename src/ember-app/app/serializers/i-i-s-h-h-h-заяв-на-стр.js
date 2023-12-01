import { Serializer as ЗаявНаСтрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-h-h-h-заяв-на-стр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаявНаСтрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
