// responsive done
import React from "react";
import { Grid, Box, Typography, useMediaQuery } from "@material-ui/core";
import SecondaryText from "../../Typography/Secondary/SecondaryText";

import Test from "./FAQ";
import LineBreak from "../../Util/LineBreak/LineBreak";

const questions = [
  {
    question: " ছাত্রছাত্রীদের সিকিউরিটি কেমন থাকবে  ?",
    Ans:
     [ " আমাদের বেশিরভাগ সকল ফ্যাকাল্টি এবং ডিপার্টমেন্টের স্টাফরা থাকবে । তাই সিকিউরিটি নিয়ে কোনো সম্যসা হবে না ইনশাল্লাহ ।  "]
  },
  {
    question: " পিকনিকের ফী কি ফিরৎযোগ্য ?",
    Ans:
      [" না। ফিরৎযোগ্য না । তবে বিশেষ প্রয়োজনে ফাকাল্টিদের সাথে কথা বলার জন্য অনুরোধ করা হল । "]
  },
  {
    question: " পিকনিকে আমি গেস্ট হিসেবে কাদের নিতে পারবো ?",
    Ans:
      [" শুধু মাত্র রক্তেরসম্পর্কের আত্মীয়দের সাথে নেয়া যাবে । "]
  },
  {
    question: " ক্যাম্পাস থেকেই বাসে উঠা লাগবে ? রাস্তায় কোনো জায়গা থেকে উঠা যাবে না ?",
    Ans:
     [ " না। উঠা যাবে না । তবে বিশেষ প্রয়োজনে ফ্যাকাল্টিদের সাথে কথা বলার জন্য অনুরোধ করা হল ।"]
  },
  {
    question: " রেজিস্টেশন বা পিকনিক সংক্রান্ত কোনো ধরনের সমস্যার সমাধান কোথায় পাবো  ?",
    Ans:[
      [" সার্বিক দায়িত্বে : শারমিন লিনতা  ( ০১৭০৩৯৯১১৪১ ) "], ["রেজিস্টেশন সংক্রান্ত সমস্যা : ০১৫২১৩৩৩৭৯৯ ( রাকিব , ১৭১ ) "], 
      [["পিকনিক সংক্রান্ত সমস্যা : ০১৬০০০০২২৫২ ( ওয়ালিদ , ১৬৩) । "] ,["০১৮৬৩৭৩৩৫৫৫ ( নাহিদ , ১৭১ ) | " ] , [" ০১৭৮৪৯৫৭৪৮৬ ( জয়, ১৭১ )" ]]
    ]}
];

const FaqSection = () => {
  const sm = useMediaQuery(theme => theme.breakpoints.down(600))
  return (
    <Box p={3}>
      <Box pb={sm ? 1 : 5} pt={sm ? 0 : 3}>
        <Grid container justify="center">
          <Grid item sm={4}>
            <SecondaryText
              primary="FAQ's"
              secondary="Frequently asked questions"
            />
          </Grid>
          <Grid item container alignItems="center" sm={8}>
            <Typography
              variant="subtitle1"
              style={{ fontFamily: "'Open Sans', sans-serif", display: sm ? "none" : "block"}}
            >
              A FAQ is a list of frequently asked questions (FAQs) and answers
              on a particular topic (also known as Questions and Answers [Q&A]
              or Frequently Answered Questions). The format is often used in
              articles, websites, email lists, and online forums where common
              questions tend to recur, for example through posts or queries by
              new users related to common knowledge gaps.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <LineBreak />
      <Box pb={0} pt={sm ? 2 : 8}>
        <div>
          {questions.map((QA, index) => (
            <Test ques={QA.question} ans={QA.Ans} num={index + 1} />
            //<Test ans={questions[0].Ans}/>
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default FaqSection;

// responsive done
