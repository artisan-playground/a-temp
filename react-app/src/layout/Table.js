import React from 'react'
import styled from 'styled-components'

const Table = styled.div`
  display: flex;
  font-weight: 900;
  font-size: 20px;
  margin-top: 10px;
  &:first-child {
    .cell-table {
      padding: 14px 0px;
      text-align: center;
      flex: 1;
      &.menu-table {
        border-top: 0px;
      }
    }
    .date,
    .price {
      flex: 1;
    }
    .farm {
      flex: 1;
      i {
        font-size: 15px;
      }
    }
    .name {
      flex: 1px;
    }
  }
  &:last-child {
    .cell-table {
      padding: 14px 0px;
      text-align: center;
      flex: 1;
      &.menu-table {
        border-top: 0px;
      }
    }
    .date,
    .price {
      flex: 1;
    }
    .name {
      flex: 1px;
      text-align: left;
    }
    .farm {
      flex: 1;
      i {
        font-size: 15px;
      }
    }
  }
  .cell-table {
    padding: 14px 0px;
    text-align: center;
    flex: 1;
  }
  .date,
  .price {
    flex: 1;
  }
  .farm {
    flex: 1;
    i {
      font-size: 15px;
    }
  }
  .name {
    flex: 1px;
    text-align: left;
    p {
      margin-left: 15%;
    }
  }
`

const TableCard = ({ No, Location, Temperature }) => {
  return (
    <Table>
      <div class="cell-table date">{No}</div>
      <div class="cell-table name-header">{Location}</div>
      <div class="cell-table farm">{Temperature}</div>
    </Table>
  )
}

export default TableCard
