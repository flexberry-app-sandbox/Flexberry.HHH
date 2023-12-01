package HHH.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import HHH.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: СтрПолис
 */
@Entity(name = "IISHHHСтрПолис")
@Table(schema = "public", name = "СтрПолис")
public class StrPolis {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "СрокДейст")
    private Integer срокдейст;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "ТеррСтр")
    private String террстр;

    @Column(name = "СтрТариф")
    private Integer стртариф;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klient")
    @Convert("Klient")
    @Column(name = "Клиент", length = 16, unique = true, nullable = false)
    private UUID _klientid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klient", insertable = false, updatable = false)
    private Klient klient;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DogovorStr")
    @Convert("DogovorStr")
    @Column(name = "ДоговорСтр", length = 16, unique = true, nullable = false)
    private UUID _dogovorstrid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DogovorStr", insertable = false, updatable = false)
    private DogovorStr dogovorstr;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;


    public StrPolis() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Integer getСрокДейст() {
      return срокдейст;
    }

    public void setСрокДейст(Integer срокдейст) {
      this.срокдейст = срокдейст;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public String getТеррСтр() {
      return террстр;
    }

    public void setТеррСтр(String террстр) {
      this.террстр = террстр;
    }

    public Integer getСтрТариф() {
      return стртариф;
    }

    public void setСтрТариф(Integer стртариф) {
      this.стртариф = стртариф;
    }


}