package com.student.common.base;

public class BaseParmtersVO {

    String sidx;
    String sord;
    int page;
    int rows;
    boolean layTable;

    public boolean isLayTable() {
        return layTable;
    }

    public void setLayTable(boolean layTable) {
        this.layTable = layTable;
    }

    public String getSidx() {
        return sidx;
    }

    public String getSord() {
        return sord;
    }

    public int getPage() {
        return page;
    }

    public int getRows() {
        return rows;
    }

    public void setSidx(String sidx) {
        this.sidx = sidx;
    }

    public void setSord(String sord) {
        this.sord = sord;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public void setRows(int rows) {
        this.rows = rows;
    }

}
