import re, string

# Storing for easier reuse/editing while debugging
sentence_punctuation_regex = r"[\.|!|?]"
number_regex = r"-?\d"
letter_only_words_regex = r"\b[A-Za-z]+\b"

# Helper Functions
def sanitize_user_input(user_input):
    """
    Cleans the user input by removing sentence, stripping white space off the sides, and removing
    extra spaces between words
    """
    sanitized_input = re.sub(sentence_punctuation_regex, "", user_input)
    sanitized_input = sanitized_input.strip()
    sanitized_input = re.sub(r"\s+", " ", sanitized_input)

    return sanitized_input

def validate_sentence_count(user_input):
    """
    Searches a string prior to santitzation for multiple punctuation marks or punctuation marks in the middle.
    """
    stripped_input = user_input.strip()
    punctuation_found = re.findall(sentence_punctuation_regex, user_input)

    if (len(punctuation_found) > 1 or (len(punctuation_found) == 1 and (stripped_input[-1] != punctuation_found[0]))):
        raise MultiSentenceException
    
def validate_words_exist(user_input):
    """
    Matches only words that contain non-numbers
    i.e. didn't is ok, d1dn't is not
    """
    if(not re.search(letter_only_words_regex, user_input)):
        raise NoWordsException
    
def output_error_msg(message_list):
    """
    Prints a formatted message from a provided message list
    """
    message = ["*****"] + message_list + ["*****"]

    print("\n".join(message))

# Custom Exceptions for Error Catching
class MultiSentenceException(Exception):
    pass

class ShortAnswerException(Exception):
    pass

class NoWordsException(Exception):
    pass

# Program
# Instantiate Variables
valid_resp = False
longest_words = {
    "words"  : [],
    "length" : 0
}
unique_words = []
duped_words = []
total_word_count = 0
total_vowel_count = 0

# Sanitize and Validate Response
while not valid_resp:
    try:
        user_input = input("Give me a single sentence 10 words or more: ")
        # Detect if multiple sentences. Do before sanitization since we remove punctuation in that process
        validate_sentence_count(user_input)
        validate_words_exist(user_input)

        san_input = sanitize_user_input(user_input)
        word_list = san_input.split(" ")

        # Detect if too short
        if (len(word_list) < 10):
            raise ShortAnswerException
        
        valid_resp = True
    except MultiSentenceException:
        output_error_msg([
            "Response either contained multiple sentence-ending punctuation or had that punctuation",
            "in the middle and therefore may be multiple sentences. Please provide a single sentence",
            "with at most 1 sentence-ending punctuation mark."
        ])
    except ShortAnswerException:
        output_error_msg([
            "Response was fewer than 10 words.",
            "Please ensure a minimum of 10 words in your sentence."
        ])
    except NoWordsException:
        output_error_msg([
            "Response contained no words."
            "Please be sure to enter a sentence with words in them."
        ])


# Gather information for output
total_word_count = len(word_list)
for word in word_list:
    # Skip numbers so word statistics don't get skewed, but count in word count
    if (re.search(number_regex, word)):
        continue

    # Validate Unique and Duped words and adjust them accordingly
    if (word in unique_words and word not in duped_words):
        duped_words.append(word)
        unique_words = [u_word for u_word in unique_words if u_word != word]
    elif (word not in unique_words and word not in duped_words):
        unique_words.append(word)
        

    currLongest = longest_words["length"]
    word_length = len(word)
    """ count vowels
    I considered using count() here but it was going to do four extra loops across the entire string
    so I opted for a single loop that checks all vowels throughout the single loop of the string.
    """
    for letter in word:
        if (letter.lower() in ['a', 'e', 'i', 'o', 'u']):
            total_vowel_count += 1
    
    if (word_length > currLongest):
        longest_words["length"] = word_length
        longest_words["words"] = [word]
    elif (word_length == currLongest and word not in longest_words["words"]):
        longest_words["words"].append(word)

# Word Count Output
print("Your total word count is %d." % total_word_count)
# Vowel Count Output
print("Your total vowel count is %d." % total_vowel_count)
# Unique Words Output
if (len(unique_words) == 1):
    print("Your only unique word was %s." % unique_words[0])
elif (len(unique_words)):
    print("Your unique words are: ")
    for word in unique_words:
        print(" * %s" % word)
else:
    print("You had no unique words")

# Longest Words Output
if (len(longest_words["words"]) == 1):
    print("Your longest word is %s." % longest_words["words"][0])
else:
    print("Your longest words are: ")
    for word in longest_words["words"]:
        print(" * %s" % word)
