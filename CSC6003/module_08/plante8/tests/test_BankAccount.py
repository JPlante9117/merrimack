from unittest.mock import patch
from unittest import TestCase
from BankAccount import BankAccount

class TestBankAccount(TestCase):
    @classmethod
    def setUpClass(self):
        self.acct = BankAccount(1, 30.49)

    def test_a_bank_account_init(self):
        self.assertIsInstance(self.acct, BankAccount)
        self.assertEqual(self.acct.get_balance(), 30.49)
        self.assertEqual(self.acct.get_account_number(), 1)

    def test_b_balance_sanitization(self):
        new_bank_acct = BankAccount(12, 30.304929384893)
        self.assertEqual(new_bank_acct.get_balance(), 30.30)
        second_acct = BankAccount(13, 'test')
        self.assertEqual(second_acct.get_balance(), 0.00)

    def test_c_determine_withdrawal_ability(self):
        self.assertEqual(self.acct.can_withdraw(12), True)
        self.assertEqual(self.acct.can_withdraw(200000), False)

    def test_d_withdraw(self):
        self.acct.withdraw_funds(10)
        self.assertEqual(self.acct.get_balance(), 20.49)
        # Would Overdraft, so deny
        self.acct.withdraw_funds(200)
        self.assertEqual(self.acct.get_balance(), 20.49)

    def test_e_deposit(self):
        self.acct.deposit_funds(0.01)
        self.assertEqual(self.acct.get_balance(), 20.50)