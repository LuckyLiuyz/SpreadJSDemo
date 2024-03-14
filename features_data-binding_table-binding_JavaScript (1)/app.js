
        var spreadNS = GC.Spread.Sheets;
        window.onload = function () {
            var spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"));
            initSpread(spread);
        };

        function initSpread(spread) {
            debugger;
            spread.fromJSON(templatejson);
            spread.suspendPaint();
            var sheet = spread.getSheetFromName("Sheet1");;
            let table = sheet.tables.all()[0];
            table.autoGenerateColumns(false);
            let data = {formDatas: [
                {
                  sid: null,
                  tenantId: null,
                  orgId: null,
                  userId: null,
                  created: null,
                  createdBy: null,
                  lastUpdated: null,
                  lastUpdatedBy: null,
                  reportId: null,
                  indicatorId: null,
                  seqId: null,
                  jgid: null,
                  bblx: null,
                  bbqs: null,
                  dm: "指标编码311",
                  qmsy: null,
                  bqdj: null,
                  bqzx: null,
                  bqdx: null,
                  ids: null,
                  keywords: null,
                  期末实有:123,
                  本期登记:356,
                  本期注销:13,
                  本期吊销:143
                },
                {
                  sid: null,
                  tenantId: null,
                  orgId: null,
                  userId: null,
                  created: null,
                  createdBy: null,
                  lastUpdated: null,
                  lastUpdatedBy: null,
                  reportId: null,
                  indicatorId: null,
                  seqId: null,
                  jgid: null,
                  bblx: null,
                  bbqs: null,
                  dm: "指标编码3",
                  qmsy: null,
                  bqdj: null,
                  bqzx: null,
                  bqdx: null,
                  ids: null,
                  keywords: null,
                  期末实有:123,
                  本期登记:356,
                  本期注销:13,
                  本期吊销:143
                },
                {
                  sid: null,
                  tenantId: null,
                  orgId: null,
                  userId: null,
                  created: null,
                  createdBy: null,
                  lastUpdated: null,
                  lastUpdatedBy: null,
                  reportId: null,
                  indicatorId: null,
                  seqId: null,
                  jgid: null,
                  bblx: null,
                  bbqs: null,
                  dm: "指标编码3",
                  qmsy: null,
                  bqdj: null,
                  bqzx: null,
                  bqdx: null,
                  ids: null,
                  keywords: null,
                  期末实有:123,
                  本期登记:356,
                  本期注销:13,
                  本期吊销:143
                },
                {
                  sid: null,
                  tenantId: null,
                  orgId: null,
                  userId: null,
                  created: null,
                  createdBy: null,
                  lastUpdated: null,
                  lastUpdatedBy: null,
                  reportId: null,
                  indicatorId: null,
                  seqId: null,
                  jgid: null,
                  bblx: null,
                  bbqs: null,
                  dm: "指标编码3",
                  qmsy: null,
                  bqdj: null,
                  bqzx: null,
                  bqdx: null,
                  ids: null,
                  keywords: null,
                  期末实有:123,
                  本期登记:356,
                  本期注销:13,
                  本期吊销:143
                },
                {
                  sid: null,
                  tenantId: null,
                  orgId: null,
                  userId: null,
                  created: null,
                  createdBy: null,
                  lastUpdated: null,
                  lastUpdatedBy: null,
                  reportId: null,
                  indicatorId: null,
                  seqId: null,
                  jgid: null,
                  bblx: null,
                  bbqs: null,
                  dm: "指标编码3",
                  qmsy: null,
                  bqdj: null,
                  bqzx: null,
                  bqdx: null,
                  ids: null,
                  keywords: null,
                  期末实有:123,
                  本期登记:356,
                  本期注销:13,
                  本期吊销:143
                },
                {
                  sid: null,
                  tenantId: null,
                  orgId: null,
                  userId: null,
                  created: null,
                  createdBy: null,
                  lastUpdated: null,
                  lastUpdatedBy: null,
                  reportId: null,
                  indicatorId: null,
                  seqId: null,
                  jgid: null,
                  bblx: null,
                  bbqs: null,
                  dm: "指标编码3",
                  qmsy: null,
                  bqdj: null,
                  bqzx: null,
                  bqdx: null,
                  ids: null,
                  keywords: null,
                  期末实有:123,
                  本期登记:356,
                  本期注销:13,
                  本期吊销:143
                },
                {
                  sid: null,
                  tenantId: null,
                  orgId: null,
                  userId: null,
                  created: null,
                  createdBy: null,
                  lastUpdated: null,
                  lastUpdatedBy: null,
                  reportId: null,
                  indicatorId: null,
                  seqId: null,
                  jgid: null,
                  bblx: null,
                  bbqs: null,
                  dm: "指标编码3",
                  qmsy: null,
                  bqdj: null,
                  bqzx: null,
                  bqdx: null,
                  ids: null,
                  keywords: null,
                  期末实有:123,
                  本期登记:356,
                  本期注销:13,
                  本期吊销:143
                },
              ]}
            // let data ={formDatas: [
            //     {
            //       sid: null,
            //       tenantId: null,
            //       orgId: null,
            //       userId: null,
            //       created: null,
            //       createdBy: null,
            //       lastUpdated: null,
            //       lastUpdatedBy: null,
            //       reportId: null,
            //       indicatorId: null,
            //       seqId: null,
            //       jgid: null,
            //       bblx: null,
            //       bbqs: null,
            //       dm: "指标编码311",
            //       qmsy: null,
            //       bqdj: null,
            //       bqzx: null,
            //       bqdx: null,
            //       ids: null,
            //       keywords: null
            //     },
            //     {
            //       sid: null,
            //       tenantId: null,
            //       orgId: null,
            //       userId: null,
            //       created: null,
            //       createdBy: null,
            //       lastUpdated: null,
            //       lastUpdatedBy: null,
            //       reportId: null,
            //       indicatorId: null,
            //       seqId: null,
            //       jgid: null,
            //       bblx: null,
            //       bbqs: null,
            //       dm: "指标编码3",
            //       qmsy: null,
            //       bqdj: null,
            //       bqzx: null,
            //       bqdx: null,
            //       ids: null,
            //       keywords: null
            //     }
            //   ]
            // }
            var tableColumn1 = new spreadNS.Tables.TableColumn();
            // tableColumn1.name("DESCRIPTION");
            tableColumn1.dataField("期末实有");
            var tableColumn2 = new spreadNS.Tables.TableColumn();
            // tableColumn2.name("QUANTITY");
            tableColumn2.dataField("本期登记");
            var tableColumn3 = new spreadNS.Tables.TableColumn();
            // tableColumn3.name("AMOUNT");
            tableColumn3.dataField("本期注销");
            var tableColumn4= new spreadNS.Tables.TableColumn();
            // tableColumn3.name("AMOUNT");
            tableColumn4.dataField("本期注销");
            table.bindColumns([tableColumn1, tableColumn2, tableColumn3,tableColumn4]);
            table.bindingPath("formDatas");
            dataSource1 = new GC.Spread.Sheets.Bindings.CellBindingSource(data)
           
            spread.resumePaint();
            sheet.setDataSource(dataSource1)

        }
        