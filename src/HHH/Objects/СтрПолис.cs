﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.HHH
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Стр полис.
    /// </summary>
    // *** Start programmer edit section *** (СтрПолис CustomAttributes)

    // *** End programmer edit section *** (СтрПолис CustomAttributes)
    [AutoAltered()]
    [Caption("Стр полис")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СтрПолисE", new string[] {
            "Дата as \'Дата\'",
            "СрокДейст as \'Срок дейст\'",
            "Номер as \'Номер\'",
            "ТеррСтр as \'Терр стр\'",
            "СтрТариф as \'Стр тариф\'",
            "Клиент as \'Клиент\'",
            "Клиент.ФИО as \'ФИО\'",
            "ДоговорСтр as \'Договор стр\'",
            "ДоговорСтр.СтрСлучаи as \'Стр случаи\'",
            "Сотрудники as \'Сотрудники\'",
            "Сотрудники.ФИО as \'ФИО\'"}, Hidden=new string[] {
            "Клиент.ФИО",
            "ДоговорСтр.СтрСлучаи",
            "Сотрудники.ФИО"})]
    [MasterViewDefineAttribute("СтрПолисE", "Клиент", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [MasterViewDefineAttribute("СтрПолисE", "ДоговорСтр", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "СтрСлучаи")]
    [MasterViewDefineAttribute("СтрПолисE", "Сотрудники", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [View("СтрПолисL", new string[] {
            "Дата as \'Дата\'",
            "СрокДейст as \'Срок дейст\'",
            "Номер as \'Номер\'",
            "ТеррСтр as \'Терр стр\'",
            "СтрТариф as \'Стр тариф\'",
            "Клиент.ФИО as \'ФИО\'",
            "ДоговорСтр.СтрСлучаи as \'Стр случаи\'",
            "Сотрудники.ФИО as \'ФИО\'"})]
    public class СтрПолис : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата;
        
        private int fСрокДейст;
        
        private int fНомер;
        
        private string fТеррСтр;
        
        private int fСтрТариф;
        
        private IIS.HHH.Клиент fКлиент;
        
        private IIS.HHH.ДоговорСтр fДоговорСтр;
        
        private IIS.HHH.Сотрудники fСотрудники;
        
        // *** Start programmer edit section *** (СтрПолис CustomMembers)

        // *** End programmer edit section *** (СтрПолис CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (СтрПолис.Дата CustomAttributes)

        // *** End programmer edit section *** (СтрПолис.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (СтрПолис.Дата Get start)

                // *** End programmer edit section *** (СтрПолис.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (СтрПолис.Дата Get end)

                // *** End programmer edit section *** (СтрПолис.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СтрПолис.Дата Set start)

                // *** End programmer edit section *** (СтрПолис.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (СтрПолис.Дата Set end)

                // *** End programmer edit section *** (СтрПолис.Дата Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (СтрПолис.Номер CustomAttributes)

        // *** End programmer edit section *** (СтрПолис.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (СтрПолис.Номер Get start)

                // *** End programmer edit section *** (СтрПолис.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (СтрПолис.Номер Get end)

                // *** End programmer edit section *** (СтрПолис.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СтрПолис.Номер Set start)

                // *** End programmer edit section *** (СтрПолис.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (СтрПолис.Номер Set end)

                // *** End programmer edit section *** (СтрПолис.Номер Set end)
            }
        }
        
        /// <summary>
        /// СрокДейст.
        /// </summary>
        // *** Start programmer edit section *** (СтрПолис.СрокДейст CustomAttributes)

        // *** End programmer edit section *** (СтрПолис.СрокДейст CustomAttributes)
        public virtual int СрокДейст
        {
            get
            {
                // *** Start programmer edit section *** (СтрПолис.СрокДейст Get start)

                // *** End programmer edit section *** (СтрПолис.СрокДейст Get start)
                int result = this.fСрокДейст;
                // *** Start programmer edit section *** (СтрПолис.СрокДейст Get end)

                // *** End programmer edit section *** (СтрПолис.СрокДейст Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СтрПолис.СрокДейст Set start)

                // *** End programmer edit section *** (СтрПолис.СрокДейст Set start)
                this.fСрокДейст = value;
                // *** Start programmer edit section *** (СтрПолис.СрокДейст Set end)

                // *** End programmer edit section *** (СтрПолис.СрокДейст Set end)
            }
        }
        
        /// <summary>
        /// СтрТариф.
        /// </summary>
        // *** Start programmer edit section *** (СтрПолис.СтрТариф CustomAttributes)

        // *** End programmer edit section *** (СтрПолис.СтрТариф CustomAttributes)
        public virtual int СтрТариф
        {
            get
            {
                // *** Start programmer edit section *** (СтрПолис.СтрТариф Get start)

                // *** End programmer edit section *** (СтрПолис.СтрТариф Get start)
                int result = this.fСтрТариф;
                // *** Start programmer edit section *** (СтрПолис.СтрТариф Get end)

                // *** End programmer edit section *** (СтрПолис.СтрТариф Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СтрПолис.СтрТариф Set start)

                // *** End programmer edit section *** (СтрПолис.СтрТариф Set start)
                this.fСтрТариф = value;
                // *** Start programmer edit section *** (СтрПолис.СтрТариф Set end)

                // *** End programmer edit section *** (СтрПолис.СтрТариф Set end)
            }
        }
        
        /// <summary>
        /// ТеррСтр.
        /// </summary>
        // *** Start programmer edit section *** (СтрПолис.ТеррСтр CustomAttributes)

        // *** End programmer edit section *** (СтрПолис.ТеррСтр CustomAttributes)
        [StrLen(255)]
        public virtual string ТеррСтр
        {
            get
            {
                // *** Start programmer edit section *** (СтрПолис.ТеррСтр Get start)

                // *** End programmer edit section *** (СтрПолис.ТеррСтр Get start)
                string result = this.fТеррСтр;
                // *** Start programmer edit section *** (СтрПолис.ТеррСтр Get end)

                // *** End programmer edit section *** (СтрПолис.ТеррСтр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СтрПолис.ТеррСтр Set start)

                // *** End programmer edit section *** (СтрПолис.ТеррСтр Set start)
                this.fТеррСтр = value;
                // *** Start programmer edit section *** (СтрПолис.ТеррСтр Set end)

                // *** End programmer edit section *** (СтрПолис.ТеррСтр Set end)
            }
        }
        
        /// <summary>
        /// Стр полис.
        /// </summary>
        // *** Start programmer edit section *** (СтрПолис.ДоговорСтр CustomAttributes)

        // *** End programmer edit section *** (СтрПолис.ДоговорСтр CustomAttributes)
        [PropertyStorage(new string[] {
                "ДоговорСтр"})]
        [NotNull()]
        public virtual IIS.HHH.ДоговорСтр ДоговорСтр
        {
            get
            {
                // *** Start programmer edit section *** (СтрПолис.ДоговорСтр Get start)

                // *** End programmer edit section *** (СтрПолис.ДоговорСтр Get start)
                IIS.HHH.ДоговорСтр result = this.fДоговорСтр;
                // *** Start programmer edit section *** (СтрПолис.ДоговорСтр Get end)

                // *** End programmer edit section *** (СтрПолис.ДоговорСтр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СтрПолис.ДоговорСтр Set start)

                // *** End programmer edit section *** (СтрПолис.ДоговорСтр Set start)
                this.fДоговорСтр = value;
                // *** Start programmer edit section *** (СтрПолис.ДоговорСтр Set end)

                // *** End programmer edit section *** (СтрПолис.ДоговорСтр Set end)
            }
        }
        
        /// <summary>
        /// Стр полис.
        /// </summary>
        // *** Start programmer edit section *** (СтрПолис.Клиент CustomAttributes)

        // *** End programmer edit section *** (СтрПолис.Клиент CustomAttributes)
        [PropertyStorage(new string[] {
                "Клиент"})]
        [NotNull()]
        public virtual IIS.HHH.Клиент Клиент
        {
            get
            {
                // *** Start programmer edit section *** (СтрПолис.Клиент Get start)

                // *** End programmer edit section *** (СтрПолис.Клиент Get start)
                IIS.HHH.Клиент result = this.fКлиент;
                // *** Start programmer edit section *** (СтрПолис.Клиент Get end)

                // *** End programmer edit section *** (СтрПолис.Клиент Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СтрПолис.Клиент Set start)

                // *** End programmer edit section *** (СтрПолис.Клиент Set start)
                this.fКлиент = value;
                // *** Start programmer edit section *** (СтрПолис.Клиент Set end)

                // *** End programmer edit section *** (СтрПолис.Клиент Set end)
            }
        }
        
        /// <summary>
        /// Стр полис.
        /// </summary>
        // *** Start programmer edit section *** (СтрПолис.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (СтрПолис.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.HHH.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (СтрПолис.Сотрудники Get start)

                // *** End programmer edit section *** (СтрПолис.Сотрудники Get start)
                IIS.HHH.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (СтрПолис.Сотрудники Get end)

                // *** End programmer edit section *** (СтрПолис.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СтрПолис.Сотрудники Set start)

                // *** End programmer edit section *** (СтрПолис.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (СтрПолис.Сотрудники Set end)

                // *** End programmer edit section *** (СтрПолис.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СтрПолисE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СтрПолисE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СтрПолисE", typeof(IIS.HHH.СтрПолис));
                }
            }
            
            /// <summary>
            /// "СтрПолисL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СтрПолисL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СтрПолисL", typeof(IIS.HHH.СтрПолис));
                }
            }
        }
    }
}
