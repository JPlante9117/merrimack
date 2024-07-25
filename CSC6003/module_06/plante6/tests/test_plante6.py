import unittest
from plante6 import calculate_area_of_rectangle

class TestRectangle(unittest.TestCase):
    @classmethod
    def setUpClass(self):
        self.calc1 = calculate_area_of_rectangle(8, 2)
        self.calc2 = calculate_area_of_rectangle(10, 29.345)
        self.calc3 = calculate_area_of_rectangle(1, 0)
        self.calc4 = calculate_area_of_rectangle(0.5, 2)
        self.calc5 = calculate_area_of_rectangle(1.2345678, 10)
        self.calculations = [self.calc1, self.calc2, self.calc3, self.calc4, self.calc5]
        self.places = 2

    def test_is_float(self):
        for calc in self.calculations:
            self.assertIsInstance(calc, float)
        self.assertIsInstance(calc, float)

    def test_calculation_accuracy(self):
        self.assertAlmostEqual(self.calc1, 16.0, self.places)
        self.assertAlmostEqual(self.calc2, 293.45, self.places)
        self.assertAlmostEqual(self.calc3, 0.0, self.places)
        self.assertAlmostEqual(self.calc4, 1.0, self.places)

    def test_calculation_roundedness(self):
        self.assertAlmostEqual(self.calc5, 12.35, self.places)
        self.assertEqual(str(self.calc5), '12.35')
        self.assertNotEqual(self.calc5, 12.345678, self.places)
        self.assertAlmostEqual(self.calc1, 16.0, self.places)
        self.assertEqual(str(self.calc1), '16.0')

if __name__ == '__main__':
    unittest.main()