/**************************************/

module.exports = { seed }

/**************************************/

const TABLE = 'Trees'

function seed (knex) {
  return (
    knex (TABLE)
    .delete () // deletes all entries
    .then (function () {
      // Inserts seed entries
      return knex (TABLE).insert ([
        {
          'form_id' : 1,
          'name' : `January Sales`,
          'data' : `{"0":{"path":"10"},"1":{"0":{"0":{"path":"100"},"1":{"path":"101","to":"Bernd"},"path":"10","rule":{"key":"supervisor","op":"is equal to","val":"Bernd"}},"1":{"0":{"path":"110"},"1":{"path":"110","to":"Jonathan"},"path":"11","rule":{"key":"date","op":"contains","val":"January"}},"path":"1","rule":{"key":"topic","op":"is equal to","val":"delivery"}},"path":"","rule":{"key":"quantity","op":"is between","val":"5, 10"}}`,
        },
        {
          'form_id' : 2,
          'name' : `New Customer Billing`,
          'data' : `{"0":{"path":"0","to":"Tommy"},"1":{"0":{"0":{"path":"100","to":"Alvin"},"1":{"path":"101"},"path":"10","rule":{"key":"state","op":"contains","val":"Oklahoma"}},"1":{"path":"11"},"path":"1","rule":{"key":"agent","op":"equal to","val":"Jason"}},"path":"","rule":{"key":"price","op":"is less than","val":"100"}}`,
        },
        {
          'form_id' : 3,
          'name' : `Employee Software Issues`,
          'data' : `{"0":{"0":{"0":{"path":"000","to":"Katie"},"1":{"path":"001","to":"Alyssa"},"path":"00","rule":{"key":"date","op":"contains","val":"2018"}},"1":{"path":"01"},"path":"0","rule":{"key":"ticketNumber","op":"is less than","val":"600"}},"1":{"path":"0"},"path":"","rule":{"key":"employeeId","op":"is equal to","val":"E92374Q1"}}`,
        },
      ])
    })
  )
}
