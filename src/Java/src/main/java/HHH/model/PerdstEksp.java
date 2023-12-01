package HHH.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import HHH.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ПердстЭксп
 */
@Entity(name = "IISHHHПердстЭксп")
@Table(schema = "public", name = "ПердстЭксп")
public class PerdstEksp {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ОсновПровед")
    private String основпровед;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "ВидЭксп")
    private String видэксп;

    @Column(name = "РезулЭксп")
    private String резулэксп;

    @Column(name = "ЦельЭксп")
    private String цельэксп;

    @Column(name = "ОбъектЭксп")
    private String объектэксп;

    @Column(name = "Номер")
    private Integer номер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZayavNaStr")
    @Convert("ZayavNaStr")
    @Column(name = "ЗаявНаСтр", length = 16, unique = true, nullable = false)
    private UUID _zayavnastrid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZayavNaStr", insertable = false, updatable = false)
    private ZayavNaStr zayavnastr;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klient")
    @Convert("Klient")
    @Column(name = "Клиент", length = 16, unique = true, nullable = false)
    private UUID _klientid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klient", insertable = false, updatable = false)
    private Klient klient;


    public PerdstEksp() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getОсновПровед() {
      return основпровед;
    }

    public void setОсновПровед(String основпровед) {
      this.основпровед = основпровед;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getВидЭксп() {
      return видэксп;
    }

    public void setВидЭксп(String видэксп) {
      this.видэксп = видэксп;
    }

    public String getРезулЭксп() {
      return резулэксп;
    }

    public void setРезулЭксп(String резулэксп) {
      this.резулэксп = резулэксп;
    }

    public String getЦельЭксп() {
      return цельэксп;
    }

    public void setЦельЭксп(String цельэксп) {
      this.цельэксп = цельэксп;
    }

    public String getОбъектЭксп() {
      return объектэксп;
    }

    public void setОбъектЭксп(String объектэксп) {
      this.объектэксп = объектэксп;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }


}