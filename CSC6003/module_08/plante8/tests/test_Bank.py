from unittest.mock import patch
from unittest import TestCase
from Bank import Bank

class TestBank(TestCase):
    @classmethod
    def setUpClass(self):
        self.bank = Bank()

    def test_a_bank_init(self):
        self.assertIsInstance(self.bank, Bank)

    @patch('builtins.input', return_value='200.00')
    def test_b_bank_create_account(self, mock_input):
        self.bank.create_account()
        self.assertEqual(len(self.bank.get_accounts()), 1)
        self.bank.create_account()
        self.assertEqual(len(self.bank.get_accounts()), 2)
        self.assertEqual(self.bank.get_account(1).get_account_number(), 1)
        self.assertEqual(self.bank.get_account(1).get_balance(), 200)

    def test_c_bank_deposit(self):
        first_bank_acct = self.bank.get_account(1)
        self.assertEqual(first_bank_acct.get_balance(), 200)
        self.bank.deposit(1, 3.40)
        self.assertEqual(first_bank_acct.get_balance(), 203.40)

    def test_d_bank_withdraw(self):
        first_bank_acct = self.bank.get_account(1)
        self.assertEqual(first_bank_acct.get_balance(), 203.40)
        self.bank.withdraw(1, 3.40)
        self.assertEqual(first_bank_acct.get_balance(), 200)

    def test_e_bank_transfer(self):
        first_bank_acct = self.bank.get_account(1)
        second_bank_acct = self.bank.get_account(2)
        self.assertEqual(first_bank_acct.get_balance(), 200)
        self.assertEqual(second_bank_acct.get_balance(), 200)
        self.bank.transfer(1, 2, 3.40)
        self.assertEqual(first_bank_acct.get_balance(), 196.60)
        self.assertEqual(second_bank_acct.get_balance(), 203.40)

    def test_f_check_balance(self):
        first_bank_acct = self.bank.get_account(1)
        self.assertEqual(first_bank_acct.get_balance(), self.bank.check_balance(1))